import { UseCase } from "../../../base/use-case";

export class AddUseCase implements UseCase<{a: number, b:number},number> {
    execute(params: { a: number; b: number; }) :Promise<number> {
        return Promise.resolve(params.a + params.b);
    }
}