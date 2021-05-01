import { __DEV__ } from "./AppConfig";

const url = {
    graphqlURL: __DEV__ ? "http://localhost:3000/dev/graphql" : process.env.REACT_APP_API
};

export default url;