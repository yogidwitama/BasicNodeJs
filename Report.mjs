process.report.reportOnFatalError =true;
process.report.reportOnSignal=true;
process.report.reportOnUncaughtException=true;
process.report.filename="report.json";

const sampelError =()=>{
    throw new Error("ups")
};
sampelError();
