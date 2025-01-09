export const checkValidationImageFile = (file) => {
    if (typeof file === "undefined") {
        alert("파일이 없습니다!");
        return false;
    }
    
    if (file.size > 5 * 1024 * 1024) {
        alert("파일 용량이 너무 큽니다. (제한: 5MB)");
        return false;
    }
    
    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
        alert("jpeg 또는 png 파일만 업로드 가능합니다.")
        return false;
    }

    return true;
}

export const shortenFileName = (filename, keepLength) => {
    // 확장자 추출
    const extension = filename.split('.').pop();
    // 확장자가 있는 경우 filename에서 확장자를 제외한 부분을 추출
    const name = extension ? filename.slice(0, -(extension.length + 1)) : filename;

    // 확장자를 제외한 파일명(name)이 설정된 길이(keepLength)보다 길면, 
    // 파일명을 설정 길이에 맞게 축소한 후 ... 및 확장자를 붙여서 반환합니다.
    if (name.length > keepLength) {
        return `${name.slice(0, keepLength)}...${extension ? `.${extension}` : ''}`;
    }

    // name이 keepLength 보다 짧으면 그대로 filename을 반환합니다.
    return filename
}