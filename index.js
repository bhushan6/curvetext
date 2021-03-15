const curveText = (option) => {

    const styles = {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '15px',
    }

    let initialAngle = -90;
    const degToRad = (iangle) => {
       return iangle * (Math.PI / 180)
    };

    const diameter = option.radius* 2;

    // option.style.position = 'relative'
    option.style.transform = 'rotate(-90deg)'
    option.element.style.width = `${diameter}px`;
    option.element.style.height = `${diameter}px`;

    const text = option.element.innerText;
    const chars = text.split('')
    option.element.innerText = null;

    let deltaAngle

    if(option.angle){
        deltaAngle = option.angle / chars.length;
    }else{
        deltaAngle = 360 / chars.length;
    }

    chars.forEach((char, index) => {
        const charElement = document.createElement('span')
        charElement.innerText = char;
        Object.assign(charElement.style, styles)

        const xPos = option.radius * Math.cos(degToRad(initialAngle));
        const yPos = option.radius * Math.sin(degToRad(initialAngle));

        const tranlate = `translate(${xPos}px, ${yPos}px)`;
        const rotate = `rotate(${index * deltaAngle}deg)`;

        charElement.style.transform = `${tranlate} ${rotate}`

        initialAngle += deltaAngle;
        option.element.appendChild(charElement);
    })
}

module.exports.curveText = curveText;
