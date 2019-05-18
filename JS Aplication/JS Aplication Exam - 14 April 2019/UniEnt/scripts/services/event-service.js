let eventService = (() => {
    let entity = 'event';

    function create(name, dateTime, description, imageURL, organizer, peopleInterestedIn) {
        const data = {name, dateTime, description, imageURL, organizer, peopleInterestedIn};

        const endpoint = `${entity}`;

        return kinvey.post('appdata', endpoint, 'kinvey', data);
    }

    function getAll() {
        const data = {};

        const endpoint = `${entity}?query={}&sort={"peopleInterestedIn": -1}`;

        return kinvey.get('appdata', endpoint, 'kinvey', data);
    }

    async function postEdit(id, name, dateTime, description, imageURL) {

        let events = await getById(id);
        let event = events[0];

        event.name = name;
        event.dateTime = dateTime;
        event.description = description;
        event.imageURL = imageURL;

        const endpoint = `${entity}/${id}`;

        return kinvey.update('appdata', endpoint, 'kinvey', event);
    }

    function getById(id) {
        const data = {};
        const endpoint = `${entity}?query={"_id":"${id}"}`;

        return kinvey.get('appdata', endpoint, 'kinvey', data);
    }

    function getAllMy() {
        const data = {};

        let userId = sessionStorage.getItem('userId');
        const endpoint = `${entity}?query={"_acl.creator":"${userId}"}`;

        return kinvey.get('appdata', endpoint, 'kinvey', data);
    }

    function deleteById(id) {
        const data = {};

        let userId = sessionStorage.getItem('userId');
        const endpoint = `${entity}?query={"_acl.creator":"${userId}", "_id":"${id}"}`;

        return kinvey.remove('appdata', endpoint, 'kinvey', data);
    }

    async function joinEvent(id) {
        let events = await getById(id);
        let event = events[0];
        event.peopleInterestedIn = Number(event.peopleInterestedIn) + 1;

        let endpoint = `${entity}/${id}`;
        return kinvey.update('appdata', endpoint, 'kinvey', event);
    }


    return{
        create,
        getById,
        postEdit,
        deleteById,

        getAllMy,
        getAll,
        joinEvent
    }
})();