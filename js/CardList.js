class CardList {
    constructor(container, api, create, close) {
        this.container = container;
        this.api = api;
        this.create = create;
        this.close = close;
    }
    addCard(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const link = event.target.link.value;
        this.container.appendChild(this.create(name, link));
        this.close.close();
    }
    render() {
        this.api.getInitialCards().then(result => {
            for (let i=0; i<50; i++){
                this.container.appendChild(this.create(result[i].name, result[i].link));
            }
        })
    }
}