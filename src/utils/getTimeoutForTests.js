export default (cssTransitionWrapper) => {
  const appearTimeout = cssTransitionWrapper.prop('appearTimeout') || 0
  const enterTimeout = cssTransitionWrapper.prop('enterTimeout') || 0
  const leaveTimeout = cssTransitionWrapper.prop('leaveTimeout') || 0

  return appearTimeout >= enterTimeout
    ? appearTimeout + leaveTimeout
    : enterTimeout + leaveTimeout
}
