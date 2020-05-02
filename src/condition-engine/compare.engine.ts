import { Operators, IOperator } from './interfaces/IOperator';

export function compare(value: number, operator: IOperator, expected: number) {
    switch (operator) {
        case Operators.LessThan:
            return value < expected;
        case Operators.LessThanEquals:
            return value <= expected;
        case Operators.Equals:
            return value === expected;
        case Operators.GreaterThanEquals:
            return value >= expected;
        case Operators.GreaterThan:
            return value > expected;
    }

    return false;
}
