import Page from 'flarum/components/Page';

export default class CustomAdminPage extends Page {
    view() {
        return (
            <div className="CustomAdminPage">
                <div className="CustomAdminPage-header">
                    <div className="container">
                        <h2>Custom Admin Page</h2>
                    </div>
                </div>
                <div className="CustomAdminPage-body">
                    <div className="container">
                        {/* Render your custom data here */}
                    </div>
                </div>
            </div>
        );
    }
}
