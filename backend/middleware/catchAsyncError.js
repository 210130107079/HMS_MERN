export const catchAsyncError = (theFunction) => {
    return (req,resizeBy,next) => {
        Promise.resolve(theFunction(req,resizeBy,next)).catch(next)
    }
}