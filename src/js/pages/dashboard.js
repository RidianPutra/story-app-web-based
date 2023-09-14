const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._userStories = responseRecords.listStory;
    this._populateUserStoriesToElement(this._userStories);
  },

  _populateUserStoriesToElement(userStories) {
    document
      .querySelector('story-container')
      .setAttribute('listStory', JSON.stringify(userStories));
  }
};

export default Dashboard;