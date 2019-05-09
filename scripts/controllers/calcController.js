class calcController{

    constructor()
    {
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._location = "pt-BR";
        
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }


    initialize()
    {
        this.setDisplayDateTime();
        
        setInterval(()=>{
            this.setDisplayDateTime();
        },1000);
        
        
    }

    initButtonsEvents()
    {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        console.log(buttons);
        
        
        buttons.forEach((btn, index) => {
            btn.addEventListener('click', e=>{
                console.log(btn.className.baseVal.replace('btn-',''));
            });
        });
    }


    setDisplayDateTime()
    {
        this.displayDate = this.currentDate.toLocaleDateString(this._location,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._location);
    }


    get displayDate()
    {
        return this._dateEl.innerHTML;
    }

    set displayDate(value)
    {
        this._dateEl.innerHTML = value;
    }

    get displayTime()
    {
        return this._timeEl.innerHTML;
    }

    set displayTime(value)
    {
        this._timeEl.innerHTML = value;
    }


    get displayCalc()
    {
        return _displayCalcEl.innerHTML;
    }

    set displayCalc(value)
    {
        this._displayCalcEl.innerHTML = value;
    }


    get currentDate()
    {
        return new Date();
    }

    set currentDate(value)
    {
        this._currentDate = value;
    }
}