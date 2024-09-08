// Animation time
const time = 0.8
// Fade in up
export const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
};
export const duration = { duration: time }
// Fade in up with children
export const fadeInUpWithChildren = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
}