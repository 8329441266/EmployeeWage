class Utility {

    EMP_RATE_PER_HOUR = 20;
    NUM_OF_WORKING_DAYS = 25;
    MAX_HRS_IN_MONTH = 100;
    empHrs = 0;

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
    
}
module.exports = new Utility()