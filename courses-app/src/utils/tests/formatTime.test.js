import { formatTime } from '../formatter';

test("Should return correct duration format", ()=> {
    const time = formatTime(100);
    expect(time).toEqual('01:40');
})
