export const TRANSITION_DURATION = 300;
export const FADE_STYLE = {
  transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
  opacity: 0,
};
export const FADE_TRANSITION_STYLES: Record<string, any> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
