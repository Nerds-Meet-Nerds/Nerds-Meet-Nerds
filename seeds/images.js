async function convertBlob() {
    const image1 = await fetch('/api/images/seeds')
    return image1.blob()
}

function initImages() {
    const jinx1 = convertBlob()
    console.log(jinx1);
}

module.exports = initImages;