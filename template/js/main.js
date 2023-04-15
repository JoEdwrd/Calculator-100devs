let calculator = {
    tekan: document.querySelectorAll('.tekan'),
    contain: [],
    wait: [],
    operator: [],
    result: null,
    oper(){
        if(this.contain.length !== 0){
            this.wait.push(this.contain.reduce((acc, x) => acc + x, ''))
            console.log(this.wait)
            this.contain = []
        }
    },
    ditekan(click){    
        if(!(click.target.classList.contains('operator') || click.target.classList.contains('hasil'))){
            this.contain.push(click.target.innerText)
            if(document.querySelector('.liat').innerText == this.result) {
                document.querySelector('.liat').innerText = null
                this.wait = []
                this.result = null
                this.operator = []
                console.log(this.wait)
            }
        } 
        if(click.target.classList.contains('operator')) {
            this.operator.push(click.target.innerText)
            
            if(this.result){
                this.wait = []
                this.wait.push(this.result)
            }
            console.log(this.wait)
            
            if(this.operator[this.operator.length - 1] && this.operator[0] !== this.operator[this.operator.length - 1]) {
                alert('Please use the operator one by one')
                this.operator.pop()
                              
            } else {
                this.oper()
                if(click.target.innerText === '+') {
                    document.querySelector('.liat').innerText += '+'
                    
                } else if(click.target.innerText === '-'){
                    document.querySelector('.liat').innerText += '-'
                    
                } else if(click.target.innerText === '*'){
                    document.querySelector('.liat').innerText += '*'
                
                } else if(click.target.innerText === '/'){
                    document.querySelector('.liat').innerText += '/' 

                }
            }
            console.log(this.result)
        } else if(click.target.classList.contains('hasil')) {
            this.oper()
            console.log(this.operator)
            if(this.operator[this.operator.length - 1] === '+') { 
                this.result = this.wait.reduce((acc, x) => acc + Number(x), 0)
                document.querySelector('.liat').innerText = this.result 
            } else if(this.operator[this.operator.length - 1] === '-'){
                this.result = this.wait.reduce((acc, x) => acc - Number(x))
                document.querySelector('.liat').innerText = this.result
            } else if(this.operator[this.operator.length - 1] === '*'){
                this.result = this.wait.reduce((acc, x) => acc * Number(x), 1)
                document.querySelector('.liat').innerText = this.result
            } else if(this.operator[this.operator.length - 1] === '/'){
                this.result = this.wait.reduce((acc, x) => acc / Number(x))
                document.querySelector('.liat').innerText = this.result
            } 
            this.operator = []
        } 
        else {  
            document.querySelector('.liat').innerText += this.contain[this.contain.length - 1]
        }
    },
    
}
Array.from(calculator.tekan).forEach(x => x.addEventListener('click', calculator.ditekan.bind(calculator)))