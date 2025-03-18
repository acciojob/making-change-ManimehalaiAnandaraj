const makeChange = (c) => {
  // your name here
	const coins={
		q:25,
		d:10,
		n:5,
		p:1
		
	
	};
	
const result={
		q:0,
		d:0,
		n:0,
		p:0
};
		for(let i=0;i<coins.length;i++)
			{
				while (c>=coins[i]) {
					c -=coins[i];
					result[i]++;
					
					
				}
			}

	
return result;
	
}

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
