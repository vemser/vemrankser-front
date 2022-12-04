export function checkIfFileIsTooBig(file?: [File]): boolean {
    let valid = true
    if (file) {
        file.map(imgFile => {
            const size = imgFile.size / 1024 / 1024
            if (size > 10) {
                valid = false
            }
        })
    }
    return valid
}

export function checkIfFileIsCorrectType(file?: [File]): boolean {
    let valid = true
    if (file) {
        file.map(imgFile => {
            if (!['image/jpg', 'image/jpeg', 'image/png', 'image/webp'].includes(imgFile.type)) {
                valid = false
            }
        })
    }
    return valid
}