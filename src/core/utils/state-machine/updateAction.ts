export const updateAction = (state:any,payload:any) => {
    console.log("state:", state, typeof state);
    console.log("payload:", payload, typeof payload);
    return {
      ...state,
      ...payload
    };
}
