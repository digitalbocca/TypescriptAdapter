class ProductAdapter {
    product;
    constructor(product){
        this.product = product;
    }
    adapt(mapping) {
        const adaptedProduct = {};
        for(const inputKey in mapping){
            if (mapping.hasOwnProperty(inputKey)) {
                const outputKey = mapping[inputKey];
                adaptedProduct[outputKey] = this.product[inputKey];
            }
        }
        return adaptedProduct;
    }
}
/**
 * Exemplo de uso
 */ const product = {
    a200: 'produto',
    c400: 10,
    f400: 20
};
const mapping = {
    a200: "name",
    c400: "product",
    f400: "amount"
};
const adapter = new ProductAdapter(product);
const adaptedProduct = adapter.adapt(mapping);
console.log(adaptedProduct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvVHlwZXNjcmlwdEFkYXB0ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFByb2R1Y3Qge1xuICBuYW1lOiBzdHJpbmdcbiAgdmFsdWU6IG51bWJlclxuICBhbW91bnQ6IG51bWJlclxufVxuXG5jbGFzcyBQcm9kdWN0QWRhcHRlciA8UHJvdmlkZXJQcm9kdWN0LCBBZGFwdGVlPiB7XG4gIHByaXZhdGUgcHJvZHVjdDogUHJvdmlkZXJQcm9kdWN0XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb2R1Y3Q6IFByb3ZpZGVyUHJvZHVjdCkge1xuICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3RcbiAgfVxuXG4gIHB1YmxpYyBhZGFwdCAobWFwcGluZzogeyBbaW5wdXRLZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvZHVjdCB7XG4gICAgY29uc3QgYWRhcHRlZFByb2R1Y3Q6IEFkYXB0ZWUgPSB7fVxuXG4gICAgZm9yIChjb25zdCBpbnB1dEtleSBpbiBtYXBwaW5nKSB7XG4gICAgICBpZiAobWFwcGluZy5oYXNPd25Qcm9wZXJ0eShpbnB1dEtleSkpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0S2V5ID0gbWFwcGluZ1tpbnB1dEtleV07XG4gICAgICAgIGFkYXB0ZWRQcm9kdWN0W291dHB1dEtleV0gPSB0aGlzLnByb2R1Y3RbaW5wdXRLZXldXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkYXB0ZWRQcm9kdWN0XG4gIH1cbn1cblxuLyoqXG4gKiBFeGVtcGxvIGRlIHVzb1xuICovXG5cbmNvbnN0IHByb2R1Y3QgPSB7XG4gIGEyMDA6ICdwcm9kdXRvJyxcbiAgYzQwMDogMTAsXG4gIGY0MDA6IDIwXG59XG5cbmNvbnN0IG1hcHBpbmcgPSB7XG4gIGEyMDA6IFwibmFtZVwiLFxuICBjNDAwOiBcInByb2R1Y3RcIixcbiAgZjQwMDogXCJhbW91bnRcIlxufVxuXG5jb25zdCBhZGFwdGVyID0gbmV3IFByb2R1Y3RBZGFwdGVyPHR5cGVvZiBwcm9kdWN0LCB0eXBlb2YgbWFwcGluZz4ocHJvZHVjdClcbmNvbnN0IGFkYXB0ZWRQcm9kdWN0ID0gYWRhcHRlci5hZGFwdChtYXBwaW5nKVxuXG5jb25zb2xlLmxvZyhhZGFwdGVkUHJvZHVjdCk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsTUFBTTtJQUNJLFFBQXdCO0lBRWhDLFlBQW9CLE9BQXdCLENBQUU7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRztJQUNqQjtJQUVPLE1BQU8sT0FBdUMsRUFBVztRQUM5RCxNQUFNLGlCQUEwQixDQUFDO1FBRWpDLElBQUssTUFBTSxZQUFZLFFBQVM7WUFDOUIsSUFBSSxRQUFRLGNBQWMsQ0FBQyxXQUFXO2dCQUNwQyxNQUFNLFlBQVksT0FBTyxDQUFDLFNBQVM7Z0JBQ25DLGNBQWMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1lBQ3BELENBQUM7UUFDSDtRQUVBLE9BQU87SUFDVDtBQUNGO0FBRUE7O0NBRUMsR0FFRCxNQUFNLFVBQVU7SUFDZCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07QUFDUjtBQUVBLE1BQU0sVUFBVTtJQUNkLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtBQUNSO0FBRUEsTUFBTSxVQUFVLElBQUksZUFBK0M7QUFDbkUsTUFBTSxpQkFBaUIsUUFBUSxLQUFLLENBQUM7QUFFckMsUUFBUSxHQUFHLENBQUMifQ==