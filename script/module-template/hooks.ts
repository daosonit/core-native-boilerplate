import {RootState} from "app/type/state";
import {useSelector} from "react-redux";

export function use{1}<T>(fn: (state: RootState["app"]["{2}"]) => T): T {
    return useSelector((state: RootState) => fn(state.app.{2}));
}
