/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `J'ai updaté mon site !` + `Reload pour avoir la dernière version 😉`
  )

  if (answer === true) {
    window.location.reload()
  }
}
