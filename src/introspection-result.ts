export interface IntrospectionResultData {
    __schema: {
      types: {
        kind: string;
        name: string;
        possibleTypes: {
          name: string;
        }[];
      }[];
    };
  }
  
const result: IntrospectionResultData = {
    __schema: {
      types: [
        {kind: 'UNION', name: 'userFields', possibleTypes: [{name: 'userFields'}]}
      ]
    }
  };
  
  export default result;