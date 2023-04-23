class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
        this._avatarElement = document.querySelector(avatarSelector);

    };

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        }
    };

    getUserID() {
        return this._userID;
    }

    setUserInfo({ name, about, userID }) {
        this._nameElement.textContent = name;
        this._avatarElement.alt = name;
        this._jobElement.textContent = about;
        this._userID = userID;
    };

    setUserAvatar(avatar) {
        this._avatarElement.src = avatar;
    };
}

export default UserInfo;