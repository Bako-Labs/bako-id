import { VStack } from '@chakra-ui/react';
import { TextValue } from '..';
import { Dialog } from '../dialog';
import { LeftAddon } from '../inputs/leftAddon';

interface ITransactionDetailsModal {
  isOpen: boolean;
  onClose: () => void;
  domain: string;
  cost: string;
  modalTitle: string;
}

export const TransactionDomainDetailsModal = ({
  isOpen,
  onClose,
  domain,
  cost,
  modalTitle,
}: ITransactionDetailsModal) => {
  return (
    <Dialog.Modal
      motionPreset="slideInBottom"
      modalTitle={modalTitle}
      size="lg"
      isOpen={isOpen}
      onClose={onClose}
    >
      <Dialog.Body>
        <VStack spacing={2}>
          <TextValue
            justifyContent="start"
            textColor="grey.100"
            leftAction={<LeftAddon value="handles" />}
            content={domain}
          />
          <TextValue
            justifyContent="start"
            textColor="grey.100"
            leftAction={<LeftAddon value="action" />}
            content="Registration"
          />
          <TextValue
            justifyContent="start"
            textColor="grey.100"
            leftAction={<LeftAddon value="duration" />}
            content={'1 year'}
          />
          <TextValue
            justifyContent="start"
            textColor="grey.100"
            leftAction={<LeftAddon value="cost" />}
            content={`${cost.toString()} ETH`}
          />
        </VStack>
      </Dialog.Body>

      <Dialog.SecondaryAction onClick={onClose} mt={5}>
        Done
      </Dialog.SecondaryAction>
    </Dialog.Modal>
  );
};
