var ast = (function (exports) {
  'use strict';

  class Program {
    constructor(body) {
      this.body = body;
    }
  }

  class Type {
    constructor(name) {
      this.name = name;
    }
  }

  class Identifier {
    constructor(name) {
      this.name = name;
    }
  }

  class Literal {
    constructor(value, raw) {
      this.value = value;
      this.raw = raw;
    }
  }

  class VariableDeclaration {
    constructor(id, typeName) {
      Object.assign(this, { id, typeName });
    }
  }

  class ArrayDeclaration {
    constructor(id, property, typeName) {
      Object.assign(this, { id, property, typeName });
    }
  }

  class MemberExpression {
    constructor(object, property) {
      Object.assign(this, { object, property });
    }
  }

  class CallExpression {
    constructor(callee, args, isStatement = false) {
      Object.assign(this, { callee, arguments: args, isStatement });
    }
  }

  class BinaryExpression {
    constructor(operator, left, right) {
      Object.assign(this, { operator, left, right });
    }
  }

  class UnaryExpression {
    constructor(operator, argument) {
      Object.assign(this, { operator, argument });
    }
  }

  class AssignmentExpression {
    constructor(operator, left, right) {
      Object.assign(this, { operator, left, right });
    }
  }

  class LogicalExpression {
    constructor(operator, left, right) {
      Object.assign(this, { operator, left, right });
    }
  }

  class InputStatement {
    constructor(id) {
      this.id = id;
    }
  }

  class OutputStatement {
    constructor(args) {
      Object.assign(this, { arguments: args });
    }
  }

  class CallStatement {
    constructor(argument) {
      Object.assign(this, { argument });
    }
  }

  class ReturnStatement {
    constructor(argument) {
      Object.assign(this, { argument });
    }
  }

  class IfStatement {
    constructor(test, consequent, alternative = null) {
      Object.assign(this, { test, consequent, alternative });
    }
  }

  class RepeatStatement {
    constructor(body, test) {
      Object.assign(this, { body, test });
    }
  }

  class WhileStatement {
    constructor(test, body) {
      Object.assign(this, { body, test });
    }
  }

  class ForStatement {
    constructor(id, start, stop, body, step = 1) {
      Object.assign(this, { id, start, stop, step, body });
    }
  }

  class SwitchStatement {
    constructor(discriminant, cases) {
      Object.assign(this, { discriminant, cases });
    }
  }

  class SwitchCase {
    constructor(test, consequent) {
      Object.assign(this, { test, consequent });
    }
  }

  class FunctionDeclaration {
    constructor(id, params, body, procedure = false) {
      Object.assign(this, { id, params, body, procedure });
    }
  }

  exports.Program = Program;
  exports.Type = Type;
  exports.Identifier = Identifier;
  exports.Literal = Literal;
  exports.VariableDeclaration = VariableDeclaration;
  exports.ArrayDeclaration = ArrayDeclaration;
  exports.MemberExpression = MemberExpression;
  exports.CallExpression = CallExpression;
  exports.BinaryExpression = BinaryExpression;
  exports.UnaryExpression = UnaryExpression;
  exports.AssignmentExpression = AssignmentExpression;
  exports.LogicalExpression = LogicalExpression;
  exports.InputStatement = InputStatement;
  exports.OutputStatement = OutputStatement;
  exports.CallStatement = CallStatement;
  exports.ReturnStatement = ReturnStatement;
  exports.IfStatement = IfStatement;
  exports.RepeatStatement = RepeatStatement;
  exports.WhileStatement = WhileStatement;
  exports.ForStatement = ForStatement;
  exports.SwitchStatement = SwitchStatement;
  exports.SwitchCase = SwitchCase;
  exports.FunctionDeclaration = FunctionDeclaration;

  return exports;

}({}));
