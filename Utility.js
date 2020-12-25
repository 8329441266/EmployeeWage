class Utility {

    EMP_RATE_PER_HOUR = 20;
    NUM_OF_WORKING_DAYS = 20;
    MAX_HRS_IN_MONTH = 100;
    IS_PART_TIME = 2;
    IS_FULL_TIME = 1;
    empHrs = 0;
    empWage = 0;
    totalWage = 0;
    totalEmpWage = 0;
    totalEmpHrs = 0;
    totalWorkingDays = 0;

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

    workCondition = () => {
        
        while (this.totalEmpHrs <= this.MAX_HRS_IN_MONTH && this.totalWorkingDays < this.NUM_OF_WORKING_DAYS) {
            this.totalWorkingDays++;
                
            this.empSwitchCase();
                
            this.totalEmpHrs += this.empHrs;
        }
        this.totalEmpWage = this.totalEmpHrs * this.EMP_RATE_PER_HOUR;
        console.log("\n Employee's Total Days : "+this.totalWorkingDays+" ,Working Hr : "+this.totalEmpHrs+" ,Total Wage Is : "+this.totalEmpWage);  
    }

    usingFunction = () => {

        this.empSwitchCase();
        this.empHrs;
   this.workCondition ();
}

usingArray = () => {
    
    let EMP_RATE_PER_HOUR = 20;
    let IS_PART_TIME = 2;
    let IS_FULL_TIME = 1;
    let NUM_OF_WORKING_DAYS = 20;
    let MAX_HRS_IN_MONTH = 100;

    let empHrs = 0;
    let totalEmpWage = 0;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWage = new Array();

    function getWorkingHours (empCheck) {
        switch(empCheck) {
                    case IS_PART_TIME:
                            empHrs = 4;
                            break;
                    case IS_FULL_TIME:
                            empHrs = 8;
                            break;
                    default:
                            empHrs = 0;
        }
        return empHrs;
    }

    function calcDailyWage(empHrs) {
        return empHrs * EMP_RATE_PER_HOUR;
    }

    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays <= NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWage.push(calcDailyWage(empHrs));
    }
    totalEmpWage = totalEmpHrs * EMP_RATE_PER_HOUR;
    console.log("\n * The Daily Wage Of Employee Is : "+empDailyWage);
    console.log("\n * The Monthly Wage Of Employee Is : "+totalEmpWage);
}
}
module.exports = new Utility()