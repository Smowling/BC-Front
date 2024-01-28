
export default {
    async getBikeshop(id) {
        const { data: dbData, error } = await supabase.from('bikeshops').select(id=id)
        if (error) console.log("Error", error);
        return dbData;
    }

}