class StarRating extends HTMLElement{
    get value (){
        return this.getAttribute('value') || 0;
    }

    set value (val) {
        this.setAttribute('value', val);
        this.highlight(this.value - 1);
    }
    
    get number (){
        return this.getAttribute('number') || 4;
    }

    set number (val){
        this.setAttribute('number', val);
        this.stars = [];

        while(this.firstChild){
            this.removeChild(this.firstChild);
        }

        for(let i=0; i<this.number; i++ ){
            let s = document.createElement('div');
            s.className = 'star';
            this.appendChild(s);
            this.stars.push(s);
        }

        this.value = this.value;

    }

    highlight (index) {
        this.stars.forEach((star, i) => {
            star.classList.toggle('full', i <= index);
        });
    }
    
    constructor(){
        super();

        this.number = this.number;

        this.addEventListener('mousemove', e => {
            let box = this.getBoundingClientRect(),
                starIndex = Math.floor((e.pageX - box.left) / box.width * this.stars.length);

            this.highlight(starIndex);
        });

        this.addEventListener('mouseout', () => {
            this.value = this.value;
        });

        this.addEventListener('click', e => {
            let box = this.getBoundingClientRect(),
            starIndex = Math.floor((e.pageX - box.left) / box.width * this.stars.length);

            this.value = starIndex + 1;

            let rateEvent = new Event('rate');
            this.dispatchEvent(rateEvent);

        });

    }
}

customElements.define('x-star-rating', StarRating)


function iflow(){
    resultado = "";
    if(rating.value<4){
        resultado += "<div><h2>¿Cuál fue el problema?</h2></div>";
        resultado += "<div class='col-12'><center><select class='selector'>"
        resultado += "<option value='1'> </option>"
        resultado += "<option value='2'>Impuntualidad del socio</option>"
        resultado += "<option value='3'>Desacuerdo en el peso del material</option>"
        resultado += "<option value='4'>Mal servicio/actitud</option>"
        resultado += "<option value='5'>otro</option>"
        resultado += "</select></center>"
        resultado += "</div>"   
        
        document.getElementById("resultado").innerHTML = resultado;
    }
    else{
        console.log("Altacalificación") 
    }
}