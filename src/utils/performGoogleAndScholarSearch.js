import { fetchFromGoogleSearch } from './search'

export async function performGoogleAndScholarSearch(
  inputValue,
  setIsLoading,
  setSearchedResult,
  currentPage,
) {
  chrome.storage.local.get(
    ['isGoogle', 'isGoogleScholar'],
    async function (data) {
      const isGoogle = data.isGoogle
      const isGoogleScholar = data.isGoogleScholar
      if (isGoogle) {
        if (currentPage === 1) {
          chrome.storage.local.get(
            ['lastGoogleResults', 'associatedQuery'],
            async function (dt) {
              const storedData = dt.lastGoogleResults.result
              const associatedQuery = dt.associatedQuery.associatedQuery
              if (
                storedData &&
                storedData.firstPage &&
                associatedQuery === inputValue
              ) {
                const updatedResult = {
                  firstPage: storedData.firstPage,
                  secondPage: storedData.secondPage,
                  thirdPage: storedData.thirdPage,
                  fourthPage: storedData.fourthPage,
                  fifthPage: storedData.fifthPage,
                  sixthPage: storedData.sixthPage,
                  seventhPage: storedData.seventhPage,
                  eightPage: storedData.eightPage,
                }
                setSearchedResult(updatedResult)
              } else {
                const data = await fetchFromGoogleSearch(
                  inputValue,
                  1,
                  setIsLoading,
                )
                setSearchedResult({
                  firstPage: data.slice(0, 5),
                  secondPage: data.slice(5),
                  thirdPage: null,
                  fourthPage: null,
                  fifthPage: null,
                  sixthPage: null,
                  seventhPage: null,
                  eightPage: null,
                })
                chrome.storage.local.set(
                  {
                    lastGoogleResults: {
                      result: {
                        firstPage: data.slice(0, 5),
                        secondPage: data.slice(5),
                        thirdPage: null,
                        fourthPage: null,
                        fifthPage: null,
                        sixthPage: null,
                        seventhPage: null,
                        eightPage: null,
                      },
                      dateAdded: new Date().toISOString(),
                    },
                    useLastGoogleResults: true,
                    useLastGoogleScholarResults: false,
                    useLatestExtractedSearchedResults: false,
                    associatedQuery: {
                      associatedQuery: inputValue,
                    },
                  },
                  function () {
                    if (chrome.runtime.lastError) {
                      console.error(
                        'Error saving data: ' +
                          chrome.runtime.lastError.message,
                      )
                    } else {
                      const newQueryInfo = {
                        searchQuery: inputValue,
                        dateAdded: new Date().toISOString(),
                      }
                      chrome.storage.local.set(
                        { brandNewQueryInfo: newQueryInfo },
                        function () {},
                      )
                    }
                  },
                )
              }
            },
          )
        } else if (currentPage === 2) {
          chrome.storage.local.get('lastGoogleResults', function (data) {
            const result = data.lastGoogleResults.result
            setSearchedResult(result)
          })
        } else if (currentPage === 3) {
          chrome.storage.local.get(
            ['lastGoogleResults', 'associatedQuery'],
            async function (dt) {
              const storedData = dt.lastGoogleResults.result
              const associatedQuery = dt.associatedQuery.associatedQuery
              if (
                storedData &&
                storedData.thirdPage &&
                associatedQuery === inputValue
              ) {
                const updatedResult = {
                  firstPage: storedData.firstPage,
                  secondPage: storedData.secondPage,
                  thirdPage: storedData.thirdPage,
                  fourthPage: storedData.fourthPage,
                  fifthPage: storedData.fifthPage,
                  sixthPage: storedData.sixthPage,
                  seventhPage: storedData.seventhPage,
                  eightPage: storedData.eightPage,
                }
                setSearchedResult(updatedResult)
              } else {
                const data = await fetchFromGoogleSearch(
                  inputValue,
                  11,
                  setIsLoading,
                )
                chrome.storage.local.get('lastGoogleResults', function (dt) {
                  const result = dt.lastGoogleResults.result
                  const updatedResult = {
                    firstPage: result.firstPage,
                    secondPage: result.secondPage,
                    thirdPage: data.slice(0, 5),
                    fourthPage: data.slice(5),
                    fifthPage: result.fifthPage,
                    sixthPage: result.sixthPage,
                    seventhPage: result.seventhPage,
                    eightPage: result.eightPage,
                  }
                  setSearchedResult(updatedResult)
                  chrome.storage.local.set({
                    lastGoogleResults: {
                      result: updatedResult,
                      dateAdded: new Date().toISOString(),
                    },
                  })
                })
              }
            },
          )
        } else if (currentPage === 4) {
          chrome.storage.local.get(
            ['lastGoogleResults', 'associatedQuery'],
            async function (dt) {
              const storedData = dt.lastGoogleResults.result
              const associatedQuery = dt.associatedQuery.associatedQuery
              if (
                storedData &&
                storedData.fourthPage &&
                associatedQuery === inputValue
              ) {
                const updatedResult = {
                  firstPage: storedData.firstPage,
                  secondPage: storedData.secondPage,
                  thirdPage: storedData.thirdPage,
                  fourthPage: storedData.fourthPage,
                  fifthPage: storedData.fifthPage,
                  sixthPage: storedData.sixthPage,
                  seventhPage: storedData.seventhPage,
                  eightPage: storedData.eightPage,
                }
                setSearchedResult(updatedResult)
              } else {
                const data = await fetchFromGoogleSearch(
                  inputValue,
                  11,
                  setIsLoading,
                )
                chrome.storage.local.get('lastGoogleResults', function (dt) {
                  const result = dt.lastGoogleResults.result
                  const updatedResult = {
                    firstPage: result.firstPage,
                    secondPage: result.secondPage,
                    thirdPage: data.slice(0, 5),
                    fourthPage: data.slice(5),
                    fifthPage: result.fifthPage,
                    sixthPage: result.sixthPage,
                    seventhPage: result.seventhPage,
                    eightPage: result.eightPage,
                  }
                  setSearchedResult(updatedResult)
                  chrome.storage.local.set({
                    lastGoogleResults: {
                      result: updatedResult,
                      dateAdded: new Date().toISOString(),
                    },
                  })
                })
              }
            },
          )
        } else if (currentPage === 5) {
          chrome.storage.local.get(
            ['lastGoogleResults', 'associatedQuery'],
            async function (dt) {
              const storedData = dt.lastGoogleResults.result
              const associatedQuery = dt.associatedQuery.associatedQuery
              if (
                storedData &&
                storedData.fifthPage &&
                associatedQuery === inputValue
              ) {
                const updatedResult = {
                  firstPage: storedData.firstPage,
                  secondPage: storedData.secondPage,
                  thirdPage: storedData.thirdPage,
                  fourthPage: storedData.fourthPage,
                  fifthPage: storedData.fifthPage,
                  sixthPage: storedData.sixthPage,
                  seventhPage: storedData.seventhPage,
                  eightPage: storedData.eightPage,
                }
                setSearchedResult(updatedResult)
              } else {
                const data = await fetchFromGoogleSearch(
                  inputValue,
                  21,
                  setIsLoading,
                )
                chrome.storage.local.get('lastGoogleResults', function (dt) {
                  const result = dt.lastGoogleResults.result
                  const updatedResult = {
                    firstPage: result.firstPage,
                    secondPage: result.secondPage,
                    thirdPage: result.thirdPage,
                    fourthPage: result.fourthPage,
                    fifthPage: data.slice(0, 5),
                    sixthPage: data.slice(5),
                    seventhPage: result.seventhPage,
                    eightPage: result.eightPage,
                  }
                  setSearchedResult(updatedResult)
                  chrome.storage.local.set({
                    lastGoogleResults: {
                      result: updatedResult,
                      dateAdded: new Date().toISOString(),
                    },
                  })
                })
              }
            },
          )
        } else if (currentPage === 6) {
          chrome.storage.local.get(
            ['lastGoogleResults', 'associatedQuery'],
            async function (dt) {
              const storedData = dt.lastGoogleResults.result
              const associatedQuery = dt.associatedQuery.associatedQuery
              if (
                storedData &&
                storedData.sixthPage &&
                associatedQuery === inputValue
              ) {
                const updatedResult = {
                  firstPage: storedData.firstPage,
                  secondPage: storedData.secondPage,
                  thirdPage: storedData.thirdPage,
                  fourthPage: storedData.fourthPage,
                  fifthPage: storedData.fifthPage,
                  sixthPage: storedData.sixthPage,
                  seventhPage: storedData.seventhPage,
                  eightPage: storedData.eightPage,
                }
                setSearchedResult(updatedResult)
              } else {
                const data = await fetchFromGoogleSearch(
                  inputValue,
                  21,
                  setIsLoading,
                )
                console.log(data)
                chrome.storage.local.get('lastGoogleResults', function (dt) {
                  const result = dt.lastGoogleResults.result
                  const updatedResult = {
                    firstPage: result.firstPage,
                    secondPage: result.secondPage,
                    thirdPage: result.thirdPage,
                    fourthPage: result.fourthPage,
                    fifthPage: data.slice(0, 5),
                    sixthPage: data.slice(5),
                    seventhPage: result.seventhPage,
                    eightPage: result.eightPage,
                  }
                  setSearchedResult(updatedResult)
                  chrome.storage.local.set({
                    lastGoogleResults: {
                      result: updatedResult,
                      dateAdded: new Date().toISOString(),
                    },
                  })
                })
              }
            },
          )
        } else if (currentPage === 7) {
          chrome.storage.local.get(
            ['lastGoogleResults', 'associatedQuery'],
            async function (dt) {
              const storedData = dt.lastGoogleResults.result
              const associatedQuery = dt.associatedQuery.associatedQuery
              if (
                storedData &&
                storedData.seventhPage &&
                associatedQuery === inputValue
              ) {
                const updatedResult = {
                  firstPage: storedData.firstPage,
                  secondPage: storedData.secondPage,
                  thirdPage: storedData.thirdPage,
                  fourthPage: storedData.fourthPage,
                  fifthPage: storedData.fifthPage,
                  sixthPage: storedData.sixthPage,
                  seventhPage: storedData.seventhPage,
                  eightPage: storedData.eightPage,
                }
                setSearchedResult(updatedResult)
              } else {
                const data = await fetchFromGoogleSearch(
                  inputValue,
                  31,
                  setIsLoading,
                )
                chrome.storage.local.get('lastGoogleResults', function (dt) {
                  const result = dt.lastGoogleResults.result
                  const updatedResult = {
                    firstPage: result.firstPage,
                    secondPage: result.secondPage,
                    thirdPage: result.thirdPage,
                    fourthPage: result.fourthPage,
                    fifthPage: result.fifthPage,
                    sixthPage: result.sixthPage,
                    seventhPage: data.slice(0, 5),
                    eightPage: data.slice(5),
                  }
                  setSearchedResult(updatedResult)
                  chrome.storage.local.set({
                    lastGoogleResults: {
                      result: updatedResult,
                      dateAdded: new Date().toISOString(),
                    },
                  })
                })
              }
            },
          )
        } else if (currentPage === 8) {
          chrome.storage.local.get(
            ['lastGoogleResults', 'associatedQuery'],
            async function (dt) {
              const storedData = dt.lastGoogleResults.result
              const associatedQuery = dt.associatedQuery.associatedQuery
              if (
                storedData &&
                storedData.eightPage &&
                associatedQuery === inputValue
              ) {
                const updatedResult = {
                  firstPage: storedData.firstPage,
                  secondPage: storedData.secondPage,
                  thirdPage: storedData.thirdPage,
                  fourthPage: storedData.fourthPage,
                  fifthPage: storedData.fifthPage,
                  sixthPage: storedData.sixthPage,
                  seventhPage: storedData.seventhPage,
                  eightPage: storedData.eightPage,
                }
                setSearchedResult(updatedResult)
              } else {
                const data = await fetchFromGoogleSearch(
                  inputValue,
                  31,
                  setIsLoading,
                )
                chrome.storage.local.get('lastGoogleResults', function (dt) {
                  const result = dt.lastGoogleResults.result
                  const updatedResult = {
                    firstPage: result.firstPage,
                    secondPage: result.secondPage,
                    thirdPage: result.thirdPage,
                    fourthPage: result.fourthPage,
                    fifthPage: result.fifthPage,
                    sixthPage: result.sixthPage,
                    seventhPage: data.slice(0, 5),
                    eightPage: data.slice(5),
                  }
                  setSearchedResult(updatedResult)
                  chrome.storage.local.set({
                    lastGoogleResults: {
                      result: updatedResult,
                      dateAdded: new Date().toISOString(),
                    },
                  })
                })
              }
            },
          )
        }
      }
    },
  )
}
