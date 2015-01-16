// Description:
// Shouldn't the two function getMax1 and getMax2 be equivalent?
// Can you spot a problem and fix it?
// Can you learn something about Javascript style in this kata?
/* 
	function getMax1()
	{
  		var max = 
  		{
   			name: 'Max Headroom'
  		}
  		return max;
	}

	function getMax2()
	{
  		return
  		{
    		name: 'Max Headroom'
  		}
	}
*/

function getMax1()
{
	var max = {name: 'Max Headroom'};
	return max
}
function getMax2()
{
	return {name: 'Max Headroom'};
}
