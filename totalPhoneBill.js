function totalPhoneBill(data){
    const items = data.split(', ');
      
      const callCost = 2.75;
      const smsCost = 0.65;
       let callCount = 0;
      let smsCount = 0;
      for(const item of items){
    if(item == "call"){
    callCount++;
    }else if (item == "sms"){
    smsCount++;
    }
      }
    const totalBill = (callCount*callCost) + (smsCount*smsCost);
      return "R" + totalBill.toFixed(2);
    }
    
    