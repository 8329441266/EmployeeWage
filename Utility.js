class Utility {

    EMP_RATE_PER_HOUR = 20;
    NUM_OF_WORKING_DAYS = 20;
    MAX_HRS_IN_MONTH = 100;
    IS_PART_TIME = 2;
    IS_FULL_TIME = 1;
    empHrs = 0;
    empWage = 0;
    totalWage = 0;

    empCheck = Math.floor(Math.random() * 10) % 3;

    empAttendance = () => {

        let empCheck = Math.floor(Math.random() * 10) % 2;
            if (empCheck == 1) {
                console.log('Employee Is Present..');
                this.empHrs = 8;
            }
            else{
                console.log('Employee Is Absent..');
                this.empHrs = 0;
           }
    }
    dailyEmpWage = () =>{
        this.empAttendance ();
        let empWage = this.empHrs * this.EMP_RATE_PER_HOUR;
        console.log('The Daily Eamployee Wage Is : ' +empWage);
    }

    empPart_Fullwage = () =>{
        let empCheck = Math.floor(Math.random() * 10) % 3;
        
        if (empCheck == this.IS_PART_TIME){
            let empHrs = 4;
            let empWage = empHrs * this.EMP_RATE_PER_HOUR;
            console.log('Part Time Of Eamployee Is : ' +empWage);
        }
        else if (empCheck == this.IS_FULL_TIME)
            this.dailyEmpWage();
        else 
            console.log('Employee Is Absent.');
    }
    empSwitchCase = () => {

        switch(this.empCheck) {
            
            case this.IS_PART_TIME:
                this.dailyEmpWage();
                break;
            
                case this.IS_FULL_TIME:
                this.dailyEmpWage();
                break;
            
            default: 
	            console.log('Employee Is Absent..');
        }
    }

    monthEmpWage = () => {

        for (let day = 0; day < this.NUM_OF_WORKING_DAYS; day++) {
        
                this.empSwitchCase();
            
                this.empWage = this.empHrs * this.EMP_RATE_PER_HOUR;
                this.totalWage += this.empWage;
            }
                console.log('The Monthly Wage Of Employee Is : ' +this.totalWage);  
    }
    
}
module.exports = new Utility()