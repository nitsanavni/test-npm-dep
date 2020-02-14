import { getPut } from "../../utils/cache";

// TODO - move to own file
const times = async (n: number, f: () => void | Promise<void>) => {
    for (let i = 0; i < n; i++) {
        await f();
    }
};

describe("cache util", () => {
    describe("getPut", async () => {
        it("should invoke value getter only once", async () => {
            const key = "my key";
            const value = "my value";

            let getterInvocations = 0;

            const valueGetter = () => {
                getterInvocations++;

                return value;
            };

            await times(6, async () => {
                expect(await getPut(key, valueGetter)).toEqual(value);

                expect(getterInvocations).toEqual(1);
            });
        });
    });
});
