import {Lifecycle, Module, register, SagaIterator} from "core-native";
import {State} from "./type";
import {RootState} from "app/type/state";
import {{2}Main} from "./component/Main";

const initialState: State = {};

class {2}Module extends Module<RootState, "{1}"> {
    @Lifecycle()
    *onEnter(): SagaIterator {
        // TODO
    }
}

const module = register(new {2}Module("{1}", initialState));
export const actions = module.getActions();
export const {2}Component = module.attachLifecycle({2}Main);
