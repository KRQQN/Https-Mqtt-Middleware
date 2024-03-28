import express from 'express';

const edgeRouter = express.Router();

// TODO: Create routehandlers
// TODO: Add jwt middleware
edgeRouter.post('/:MAC/scan', edgeScanHandler);
edgeRouter.post('/:MAC/settings', edgeSettingsHandler);
edgeRouter.get('/:MAC/start_pub', edgeStartPubHandler);
edgeRouter.get('/:MAC/purge_database', edgePurgeDatabaseHandler);
edgeRouter.post('/:ID/location', edgeLocationHandler);
edgeRouter.post('/:ID/customer', edgeCustomerHandler);

export default edgeRouter;