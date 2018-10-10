module.exports = (app) => {
  app.log('Yay! The app was loaded!!!')

  app.on('issue_comment.created', async context => {
    // A new issue comment was created!
    // Let's log the body of the comment, to see what was said.
    console.log(context.payload.comment.body)
  })
}
