const { Translate } = require('@google-cloud/translate')

module.exports = app => {
  const translator = new Translate({ key: process.env.TRANSLATE_API_TOKEN })

  app.on('issue_comment.created', async context => {
    const { body, id } = context.payload.comment

    const translated = await translator.translate(body, 'fr')
    const details = `<details>\n<summary>French</summary>\n\n${translated[0]}\n</details>`

    return context.github.issues.editComment(context.issue({
      body: body + '\n\n---\n\n' + details,
      comment_id: id
    }))
  })
}
