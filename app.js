window.onload = function()
{
	document.getElementById('btn1').addEventListener('click', process1);
	document.getElementById('btn2').addEventListener('click', process2);
	document.getElementById('btn3').addEventListener('click', process3);
};

function getStudentsCount(rnd, accumDistr)
{
	for(var i = accumDistr.length - 1; i > -1; --i)
	{
		if(rnd > accumDistr[i])
		{
			return i;
		}
	}
	return -1;
}

function process1()
{
	var counts = document.getElementById('tsk1_0').value.split(';'),
		distr = document.getElementById('tsk1_1').value.split(';'),
		genNums = document.getElementById('tsk1_2').value.split(';'),
		accumDistr = [0],
		sum = 0,
		resultDiv = document.getElementById('results1'),
		resultStr = '';
	
	resultStr += 'Кумулятивний розподіл<br>(<' + counts[0] + ' ; 0)<br>';
	for(var i = 0, num = 0; i < counts.length; ++i)
	{
		num = accumDistr[accumDistr.length - 1] + parseFloat(distr[i]);
		accumDistr.push(num);
		resultStr += '(' + counts[i] + ' ; ' + num + ')<br>';
	}
	resultStr += '(>' + counts[counts.length - 1] + ' ; Відсутні)<br>';
	
	for(var i = 0, num = 0, students = 0; i < genNums.length; ++i)
	{
		num = parseFloat(genNums[i]);
		students = counts[getStudentsCount(num, accumDistr)];
		sum += parseInt(students);
		resultStr += '(' + (i + 1) + ';' + num + ' ; ' + students + ')<br>';
	}
	resultStr += 'Середня кількість студентів = ' + (sum / genNums.length);
	
	resultDiv.innerHTML = resultStr;
}

function process2()
{
	var nums = document.getElementById('tsk2_0').value.split(';'),
		range = document.getElementById('tsk2_1').value.split(';'),
		resultDiv = document.getElementById('results2'),
		resultStr = '',
		sum = 0,
		a = parseFloat(range[0]),
		b = parseFloat(range[1]),
		diff = b - a;
		
	for(var i = 0, num = 0; i < nums.length; ++i)
	{
		num = parseFloat(nums[i]) * diff + a;
		sum += num;
		resultStr += num + ';<br>';
	}
	
	resultStr += '<br>Середнє значення: ' + (sum / nums.length);
	resultDiv.innerHTML = resultStr;
}

function process3()
{
	var params = document.getElementById('tsk3_0').value.split(';'),
		numCount = parseInt(document.getElementById('tsk3_1').value),
		a = parseFloat(params[0]),
		m = parseFloat(params[1]),
		lastX = parseFloat(params[2]),
		resultDiv = document.getElementById('results3'),
		resultStr = '';
		
	for(var i = 0, num = 0; i < numCount; ++i)
	{
		lastX = (a * lastX) % m;
		resultStr += lastX + ';<br>';
	}
	
	resultDiv.innerHTML = resultStr;
}