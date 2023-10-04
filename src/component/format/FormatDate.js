export function GetTimeComment(date){
    let time=(new Date()-new Date(date))/1000 //đổi từ milisecond sang second
    let timeUnit='s'

    if(time>59){//trường hợp số giây lớn hơn 59
        time=(new Date()-new Date(date))/1000/60 //đổi từ second sang minute
        timeUnit='m'
    }
    if(time>59){//trường hợp số phút lớn hơn 59
        time=(new Date()-new Date(date))/1000/60/60 //đổi từ minute sang hour
        timeUnit='h'
    }
    if(time>24){//trường hợp số giờ lớn hơn 59
        time=(new Date()-new Date(date))/1000/60/60/24 //đổi từ hour sang day
        timeUnit='d'
    }
    return (Math.floor(time) + timeUnit).toString()
}
