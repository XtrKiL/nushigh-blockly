/* Turtle Code */
//Forward
		Blockly.Blocks['forward'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(65);
			this.appendValueInput("forward")
				.setCheck("Number")
				.appendField("forward");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};
		
		Blockly.JavaScript['forward'] = function(block) {
		  var value_forward = Blockly.JavaScript.valueToCode(block, 'forward', Blockly.JavaScript.ORDER_ATOMIC);
		  var code = 'forward('+value_forward+');';
		  return code;
		};		
		
		Blockly.Python['forward'] = function(block) {
		  var value_forward = Blockly.Python.valueToCode(block, 'forward', Blockly.Python.ORDER_ATOMIC);
		  var code = 'forward('+value_forward+')';
		  return code;
		};

//Right turn
		Blockly.Blocks['right'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(20);
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("right")
				.appendField(new Blockly.FieldAngle("0"), "angle");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};

		Blockly.JavaScript['right'] = function(block) {
		  var angle = block.getFieldValue('angle');
		  // TODO: Assemble JavaScript into code variable.
		  var code = 'right('+angle+');';
		  return code;
		};
		
		Blockly.Python['right'] = function(block) {
		  var angl = block.getFieldValue('angle');
		  // TODO: Assemble Python into code variable.
		  var code = 'right('+angle+')';
		  return code;
		};

//Left turn
		Blockly.Blocks['left'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(20);
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("left")
				.appendField(new Blockly.FieldAngle("0"), "angle");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};

		Blockly.JavaScript['left'] = function(block) {
		  var angle = block.getFieldValue('angle');
		  // TODO: Assemble JavaScript into code variable.
		  var code = 'left('+angle+');';
		  return code;
		};
		
		Blockly.Python['left'] = function(block) {
		  var angl = block.getFieldValue('angle');
		  // TODO: Assemble Python into code variable.
		  var code = 'left('+angle+')';
		  return code;
		};

//Goto
		Blockly.Blocks['goto'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(65);
			this.appendValueInput("x")
				.setCheck("Number")
				.appendField("translate X");
			this.appendValueInput("y")
				.setCheck("Number")
				.appendField("translate Y");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};

		Blockly.Python['goto'] = function(block) {
		  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
		  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
		  // TODO: Assemble Python into code variable.
		  var code = 'goto('+value_x+','+value_y+')';
		  return code;
		};

		Blockly.JavaScript['goto'] = function(block) {
		  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
		  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
		  // TODO: Assemble JavaScript into code variable.
		  var code = 'goto('+value_x+','+value_y+');';
		  return code;
		};

//Clear (Screen)

		Blockly.Blocks['clear'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(65);
			this.appendDummyInput()
				.appendField("clear screen");
			this.setInputsInline(true);
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};

		Blockly.JavaScript['clear'] = function(block) {
		  // TODO: Assemble JavaScript into code variable.
		  var code = 'clear();';
		  return code;
		};

		Blockly.Python['clear'] = function(block) {
		  // TODO: Assemble Python into code variable.
		  var code = 'clear()';
		  return code;
		};
		
//Pen up or down

		Blockly.Blocks['pen'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(20);
			this.appendDummyInput()
				.appendField("pen")
				.appendField(new Blockly.FieldDropdown([["up", "0"], ["down", "1"]]), "pen");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};

		Blockly.Python['pen'] = function(block) {
		  var dropdown_pen = block.getFieldValue('pen');
		  var code = '';
		  if(dropdown_pen == 1) code = 'pendown()';
		  else code = 'penup()';
		  
		  return code;
		};

		Blockly.JavaScript['pen'] = function(block) {
		  var dropdown_pen = block.getFieldValue('pen');
		  var code = '';
		  if(dropdown_pen == 1) code = 'pendown();';
		  else code = 'penup();';
		  
		  return code;
		};

//Reset
		Blockly.Blocks['reset'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(20);
			this.appendDummyInput()
				.appendField("reset");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};
		
		Blockly.JavaScript['reset'] = function(block) {
		  // TODO: Assemble JavaScript into code variable.
		  var code = 'reset();';
		  return code;
		};
		
		Blockly.Python['reset'] = function(block) {
		  // TODO: Assemble Python into code variable.
		  var code = 'reset()';
		  return code;
		};

//Line Width
		Blockly.Blocks['width'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(257);
			this.appendValueInput("width")
				.setCheck("Number")
				.appendField("line width");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};

		Blockly.Python['width'] = function(block) {
		  var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
		  // TODO: Assemble Python into code variable.
		  var code = 'width('+value_width+')';
		  return code;
		};
		
		Blockly.JavaScript['width'] = function(block) {
		  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
		  // TODO: Assemble JavaScript into code variable.
		  var code = 'width('+value_width+');';
		  return code;
		};

//Color

/*
Hex To RGB code taken from
http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
from David: http://stackoverflow.com/users/1047797/david
*/
		function hexToRgb(hex) {
			var bigint = parseInt(hex, 16);
			var r = (bigint >> 16) & 255;
			var g = (bigint >> 8) & 255;
			var b = bigint & 255;

			return [r, g, b].join();
		}

		Blockly.Blocks['block_colour'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(105);
			this.appendValueInput("hex_colour")
				.setCheck("Colour")
				.appendField("colour");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};
		
		Blockly.JavaScript['block_colour'] = function(block) {
		  var value_colour = Blockly.JavaScript.valueToCode(block, 'hex_colour', Blockly.JavaScript.ORDER_ATOMIC);
		  return 'colour('+hexToRgb(value_colour.slice(2))+',1);';
		};
		
		Blockly.Python['block_colour'] = function(block) {
		  var value_colour = Blockly.Python.valueToCode(block, 'hex_colour', Blockly.Python.ORDER_ATOMIC);
		  return 'colour('+hexToRgb(value_colour.slice(2))+',1)';
		  return code;
		};
				
							
//Write
		Blockly.Blocks['writeatlocation'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(160);
			this.appendValueInput("write")
				.setCheck("String")
				.appendField("write at current locaiton");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};

		Blockly.Python['writeatlocation'] = function(block) {
		  var value_write = Blockly.Python.valueToCode(block, 'write', Blockly.Python.ORDER_ATOMIC);
		  // TODO: Assemble Python into code variable.
		  var code = 'write('+value_write+')';
		  return code;
		};
		
		Blockly.JavaScript['writeatlocation'] = function(block) {
		  var value_write = Blockly.JavaScript.valueToCode(block, 'write', Blockly.JavaScript.ORDER_ATOMIC);
		  // TODO: Assemble JavaScript into code variable.
		  var code = 'write('+value_write+');';
		  return code;
		};

//Show Hide Turtle
		Blockly.Blocks['showturtle'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(330);
			this.appendDummyInput()
				.appendField("show turtle?")
				.appendField(new Blockly.FieldCheckbox("TRUE"), "show");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};

		Blockly.JavaScript['showturtle'] = function(block) {
		  var checkbox_show = block.getFieldValue('show') == 'TRUE';
		  var code = '';
		  if(checkbox_show)code ='showTurtle();';
		  else code = 'hideTurtle();';
		  return code;
		};

		Blockly.Python['showturtle'] = function(block) {
		  var checkbox_show = block.getFieldValue('show') == 'TRUE';
		  var code = '';
		  if(checkbox_show)code ='showTurtle()';
		  else code = 'hideTurtle()';
		  return code;
		};

//Wrap Around
		Blockly.Blocks['wrap'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(210);
			this.appendDummyInput()
				.appendField("wrap around?")
				.appendField(new Blockly.FieldCheckbox("TRUE"), "wrap");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};

		Blockly.Python['wrap'] = function(block) {
		  var checkbox_wrap = block.getFieldValue('wrap') == 'TRUE';
		  var code ='';
		  if(checkbox_wrap)code ='wrap(true)';
		  else code = 'wrap(false)';
		  return code;
		};
		
		Blockly.JavaScript['wrap'] = function(block) {
		  var checkbox_wrap = block.getFieldValue('wrap') == 'TRUE';
		  var code = '';
		  if(checkbox_wrap)code ='wrap(true);';
		  else code = 'wrap(false);';
		  return code;
		};
/*
Others
*/

//OutputThis!
		Blockly.Blocks['consoleprint'] = {
		  init: function() {
			this.setHelpUrl('http://www.example.com/');
			this.setColour(330);
			this.appendValueInput("input")
				.appendField("print to console");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setTooltip('');
		  }
		};
		
		Blockly.JavaScript['consoleprint'] = function(block) {
		  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
		  var code = "document.getElementById('outputBox').value += "+value_input+"\+'\\r\\n'";
		  return code;
		};
		
		Blockly.Python['consoleprint'] = function(block) {
		  var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
		  var code = "print("+value_input+")";
		  return code;
		};