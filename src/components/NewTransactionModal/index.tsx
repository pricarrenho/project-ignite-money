import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";
import * as S from "./styles";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const createTransaction = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createTransaction;
    }
  );

  const [isOpen, setIsOpen] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income",
    },
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data;

    await createTransaction({
      description,
      price,
      category,
      type,
    });

    reset();

    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger asChild>
        <S.NewTransactionButton onClick={openModal}>
          Nova transação
        </S.NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <S.Overlay />

        <S.Content>
          <Dialog.Title>Nova Transação</Dialog.Title>

          <S.CloseButton onClick={closeModal}>
            <X size={24} />
          </S.CloseButton>

          <S.NewTransactionModalForm
            onSubmit={handleSubmit(handleCreateNewTransaction)}
          >
            <S.NewTransactionModalInput
              {...register("description")}
              type="text"
              placeholder="Descrição"
              required
            />
            <S.NewTransactionModalInput
              {...register("price", { valueAsNumber: true })}
              type="number"
              placeholder="Preço"
              required
            />
            <S.NewTransactionModalInput
              {...register("category")}
              type="text"
              placeholder="Categoria"
              required
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <S.TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <S.TransactionTypeButton
                      value="income"
                      $styleType={"income"}
                    >
                      <ArrowCircleUp size={24} />
                      Entrada
                    </S.TransactionTypeButton>

                    <S.TransactionTypeButton
                      value="outcome"
                      $styleType={"outcome"}
                    >
                      <ArrowCircleDown size={24} />
                      Saída
                    </S.TransactionTypeButton>
                  </S.TransactionType>
                );
              }}
            />
            <S.NewTransactionModalBtn type="submit" disabled={isSubmitting}>
              Cadastrar
            </S.NewTransactionModalBtn>
          </S.NewTransactionModalForm>
        </S.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
