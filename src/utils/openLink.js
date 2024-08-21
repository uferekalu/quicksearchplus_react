export function openLink(url, openInNewTab) {
  if (openInNewTab) {
    chrome.tabs.create({ url })
  } else {
    chrome.tabs.update({ url })
  }
}
