import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TemplateAttachmentType = {
    name: string;
    uri: string;
    mime?: string;
    size?: number;
};

export type MailTemplateType = {
    templateName: string;
    subject: string;
    body: string;
    attachments: TemplateAttachmentType[];
};

type State = {
    templates: MailTemplateType[];
};

const initialState: State = {
    templates: [],
};

export const MailTemplatesSlice = createSlice({
    name: "mailTemplates",
    initialState,
    reducers: {
        addTemplate: (state, action: PayloadAction<MailTemplateType>) => {
            state.templates.unshift({
                templateName: action.payload.templateName?.trim() || "",
                subject: action.payload.subject || "",
                body: action.payload.body || "",
                attachments: action.payload.attachments || [],
            });
        },

        updateTemplateAtIndex: (
            state,
            action: PayloadAction<{
                index: number;
                templateName?: string;
                subject?: string;
                body?: string;
                attachments?: TemplateAttachmentType[];
            }>
        ) => {
            const { index, templateName, subject, body, attachments } = action.payload;
            const current = state.templates[index];
            if (!current) return;

            state.templates[index] = {
                templateName: templateName !== undefined ? templateName.trim() : current.templateName,
                subject: subject !== undefined ? subject : current.subject,
                body: body !== undefined ? body : current.body,
                attachments: attachments !== undefined ? attachments : current.attachments,
            };
        },

        deleteTemplateAtIndex: (state, action: PayloadAction<{ index: number }>) => {
            const idx = action.payload.index;
            if (idx < 0 || idx >= state.templates.length) return;
            state.templates.splice(idx, 1);
        },
    },
});

export const { addTemplate, updateTemplateAtIndex, deleteTemplateAtIndex } = MailTemplatesSlice.actions;
export default MailTemplatesSlice.reducer;
