const handleHTTPError = (res, msg = 'Something went wrong', code = 500) => {
    res.status(code).json({
        error: msg
    })
}

export {
    handleHTTPError
}