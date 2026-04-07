members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {
            }
        }
    },
    methods: {
        addMember: function() {
            if (!this.newMember.fname || !this.newMember.lname || !this.newMember.instrument) {
                alert('Preencha todos os campos para adicionar um novo membro!');
                return;
            }
            this.members.push(this.newMember);
            this.newMember = {};
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
