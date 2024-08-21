import React, { useState, useRef, useEffect } from 'react'
import '../home/home.css'
import { openLink } from '../../utils/openLink'

const RenderSearchedResult = ({ openInNewTab }) => {
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const [tooltip, setTooltip] = useState(null)
  const visitSiteWrapperRef = useRef(null)
  const tooltipRef = useRef(null) // Ref for tooltip

  const visitSite = (link, isChecked) => {
    openLink(link, isChecked)
  }

  const handleMouseEnter = async (event) => {
    event.preventDefault()
    const spanElement = visitSiteWrapperRef.current
    const spanRect = spanElement.getBoundingClientRect()

    if (
      event.clientX >= spanRect.left &&
      event.clientX <= spanRect.right &&
      event.clientY >= spanRect.top &&
      event.clientY <= spanRect.bottom
    ) {
      const timeoutId = setTimeout(async () => {
        try {
          const response = await fetch(
            `https://quicksearchserver-8ee1999baeab.herokuapp.com/api/summarize?url=${encodeURIComponent(
              'https://www.outreachy.org/docs/internship/#mentor-expectations',
            )}`,
          )
          const data = await response.json()
          console.log('the summary', data.summary)

          const tooltipElement = document.createElement('div')
          tooltipElement.classList.add('webPromptTooltip')
          tooltipElement.innerHTML = `
                <div class="tooltipContentHolder">
                  <h3 class="tooltipHeader">Web Summary</h3>
                  <span class="tooltipContent">${data.summary}</span>
                </div>
              `
          tooltipElement.style.position = 'absolute'
          const linkRect = visitSiteWrapperRef.current.getBoundingClientRect()
          tooltipElement.style.top = `${
            linkRect.top - tooltipElement.offsetHeight
          }px`
          tooltipElement.style.left = `${linkRect.left}px`

          document.body.appendChild(tooltipElement)
          setTooltip(tooltipElement)
          tooltipRef.current = tooltipElement

          tooltipElement.addEventListener('mouseenter', handleMouseEnterTooltip)
          tooltipElement.addEventListener('mouseleave', handleMouseLeaveTooltip)
        } catch (error) {
          console.error('Error fetching summary:', error)
        }
      }, 6000)

      setHoverTimeout(timeoutId)
    }
  }

  const handleMouseLeave = (event) => {
    if (
      tooltip &&
      !tooltip.contains(event.relatedTarget) &&
      !tooltipRef.current?.contains(event.relatedTarget)
    ) {
      clearTimeout(hoverTimeout)
      tooltip.remove()
      setTooltip(null)
    }
  }

  const handleMouseEnterTooltip = () => {
    clearTimeout(hoverTimeout)
  }

  const handleMouseLeaveTooltip = (event) => {
    if (!tooltipRef.current.contains(event.relatedTarget)) {
      tooltip.remove()
      setTooltip(null)
    }
  }

  useEffect(() => {
    const visitSiteWrapper = visitSiteWrapperRef.current
    visitSiteWrapper.addEventListener('mouseenter', handleMouseEnter)
    visitSiteWrapper.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      visitSiteWrapper.removeEventListener('mouseenter', handleMouseEnter)
      visitSiteWrapper.removeEventListener('mouseleave', handleMouseLeave)
      if (tooltip) {
        tooltip.removeEventListener('mouseenter', handleMouseEnterTooltip)
        tooltip.removeEventListener('mouseleave', handleMouseLeaveTooltip)
      }
    }
  }, [hoverTimeout, tooltip])

  return (
    <div className="result-item">
      <div className="content-div">
        <div className="search__image-cont">
          <img
            style={{
              width: '100px',
              height: '100px',
            }}
            src="icons/icon48.png"
            alt="Result Image"
            className="result-image"
          />
        </div>
        <div className="text-div">
          <h3>Result Title</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
            rem eaque vero mollitia reiciendis quaerat illum officiis
            necessitatibus ratione, iste dolor. Sunt ut nam voluptatum explicabo
            sapiente ea iste voluptate.
          </p>
          <span
            style={{
              cursor: 'pointer',
              position: 'relative',
              pointerEvents: 'auto',
            }}
            className="visit__link"
            onClick={() =>
              visitSite('https://uferegoodnews.vercel.app/', openInNewTab)
            }
            ref={visitSiteWrapperRef}
          >
            visit site
          </span>
        </div>
      </div>
      <div className="save__link-icon-cont">
        <i
          className="save-link fa fa-solid fa-file-circle-plus"
          id="openModalBtn"
        ></i>
      </div>
    </div>
  )
}

export default RenderSearchedResult
