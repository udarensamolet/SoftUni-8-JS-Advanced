function rectangle(width, height, color){
    let rect = {width, height};
    rect.calcArea = () => {
        return rect.width * rect.height;
    }
    rect.color = color.charAt(0).toUpperCase() + color.slice(1);
    return rect;
}