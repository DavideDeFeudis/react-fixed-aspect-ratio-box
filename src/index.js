import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const getInnerBoxSize = (outerBoxSize, targetAspectRatio) => {
  const { width: outerBoxWidth, height: outerBoxHeight } = outerBoxSize
  const outerBoxAspectRatio = outerBoxWidth / outerBoxHeight

  const innerBoxSize = {}
  if (outerBoxAspectRatio > targetAspectRatio) {
    innerBoxSize.width = outerBoxHeight * targetAspectRatio
    innerBoxSize.height = outerBoxHeight
  } else {
    innerBoxSize.width = outerBoxWidth
    innerBoxSize.height = outerBoxWidth / targetAspectRatio
  }

  return innerBoxSize
}

export default function FixedAspectRatioBox({ children, targetAspectRatio }) {
  const outerBox = useRef()
  const innerBox = useRef()
  const [outerBoxSize, setOuterBoxSize] = useState({ width: 0, height: 0 })
  const [innerBoxSize, setInnerBoxSize] = useState({ width: 0, height: 0 })
  let resizeObserver

  useEffect(() => {
    setupResizeObserver()
    return () => resizeObserver.disconnect()
  }, [])

  useLayoutEffect(() => {
    setInnerBoxSize(getInnerBoxSize(outerBoxSize, targetAspectRatio))
  }, [outerBoxSize])

  const setupResizeObserver = () => {
    resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setOuterBoxSize({ width, height })
    })
    resizeObserver.observe(outerBox.current)
  }

  return (
    <div
      ref={outerBox}
      style={{
        position: 'relative',
        height: '100%'
      }}
    >
      <div
        ref={innerBox}
        style={{
          position: 'absolute',
          inset: 0,
          margin: 'auto',
          width: `${innerBoxSize.width}px`,
          height: `${innerBoxSize.height}px`
        }}
      >
        {children}
      </div>
    </div>
  )
}

FixedAspectRatioBox.propTypes = {
  targetAspectRatio: PropTypes.number
}
