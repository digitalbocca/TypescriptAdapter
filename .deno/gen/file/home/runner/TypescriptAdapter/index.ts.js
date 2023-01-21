class ProductAdapter {
    product;
    constructor(product){
        this.product = product;
    }
    adapt(mapping) {
        const adaptedProduct = {};
        for (const inputKey of mapping){
            if (mapping.hasOwnProperty(inputKey)) {
                const outputKey = mapping[inputKey];
                adaptedProduct[outputKey] = this.product[inputKey];
            }
        }
        return adaptedProduct;
    }
}
const product = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vaG9tZS9ydW5uZXIvVHlwZXNjcmlwdEFkYXB0ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFByb2R1Y3Qge1xuICBuYW1lOiBzdHJpbmdcbiAgdmFsdWU6IG51bWJlclxuICBhbW91bnQ6IG51bWJlclxufVxuXG5jbGFzcyBQcm9kdWN0QWRhcHRlciA8UHJvdmlkZXJQcm9kdWN0LCBBZGFwdGVlPiB7XG4gIHByaXZhdGUgcHJvZHVjdDogUHJvdmlkZXJQcm9kdWN0XG4gIFxuICBwdWJsaWMgY29uc3RydWN0b3IgKHByb2R1Y3Q6IFByb3ZpZGVyUHJvZHVjdCkge1xuICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3RcbiAgfVxuXG4gIHB1YmxpYyBhZGFwdCAobWFwcGluZzogeyBbaW5wdXRLZXk6IHN0cmluZ106IHN0cmluZyB9KTogUHJvZHVjdCB7XG4gICAgY29uc3QgYWRhcHRlZFByb2R1Y3Q6IEFkYXB0ZWUgPSB7fVxuXG4gICAgZm9yIChjb25zdCBpbnB1dEtleSBvZiBtYXBwaW5nKSB7XG4gICAgICBpZiAobWFwcGluZy5oYXNPd25Qcm9wZXJ0eShpbnB1dEtleSkpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0S2V5ID0gbWFwcGluZ1tpbnB1dEtleV07XG4gICAgICAgIGFkYXB0ZWRQcm9kdWN0W291dHB1dEtleV0gPSB0aGlzLnByb2R1Y3RbaW5wdXRLZXldXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkYXB0ZWRQcm9kdWN0XG4gIH1cbn1cblxuY29uc3QgcHJvZHVjdCA9IHtcbiAgYTIwMDogJ3Byb2R1dG8nLFxuICBjNDAwOiAxMCxcbiAgZjQwMDogMjBcbn1cblxuY29uc3QgbWFwcGluZyA9IHtcbiAgYTIwMDogXCJuYW1lXCIsXG4gIGM0MDA6IFwicHJvZHVjdFwiLFxuICBmNDAwOiBcImFtb3VudFwiXG59XG5cbmNvbnN0IGFkYXB0ZXIgPSBuZXcgUHJvZHVjdEFkYXB0ZXI8dHlwZW9mIHByb2R1Y3QsIHR5cGVvZiBtYXBwaW5nPihwcm9kdWN0KVxuY29uc3QgYWRhcHRlZFByb2R1Y3QgPSBhZGFwdGVyLmFkYXB0KG1hcHBpbmcpXG5cbmNvbnNvbGUubG9nKGFkYXB0ZWRQcm9kdWN0KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxNQUFNO0lBQ0ksUUFBd0I7SUFFaEMsWUFBb0IsT0FBd0IsQ0FBRTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHO0lBQ2pCO0lBRU8sTUFBTyxPQUF1QyxFQUFXO1FBQzlELE1BQU0saUJBQTBCLENBQUM7UUFFakMsS0FBSyxNQUFNLFlBQVksUUFBUztZQUM5QixJQUFJLFFBQVEsY0FBYyxDQUFDLFdBQVc7Z0JBQ3BDLE1BQU0sWUFBWSxPQUFPLENBQUMsU0FBUztnQkFDbkMsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7WUFDcEQsQ0FBQztRQUNIO1FBRUEsT0FBTztJQUNUO0FBQ0Y7QUFFQSxNQUFNLFVBQVU7SUFDZCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07QUFDUjtBQUVBLE1BQU0sVUFBVTtJQUNkLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtBQUNSO0FBRUEsTUFBTSxVQUFVLElBQUksZUFBK0M7QUFDbkUsTUFBTSxpQkFBaUIsUUFBUSxLQUFLLENBQUM7QUFFckMsUUFBUSxHQUFHLENBQUMifQ==