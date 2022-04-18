const withAuth = (req, res, next) => {
    if (req.session.loggedIn) {
        next()
    } else {
        res.status(403).redirect('/login?=false')
    }
}

module.exports = withAuth;